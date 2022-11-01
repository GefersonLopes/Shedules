import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    Timestamp,
    OneToMany,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
} from "typeorm";
import { Categories } from "./categoriesEntity";
import { Schedules } from "./schedulesEntity";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresesEntity";

@Entity()
export class Property {
    @PrimaryColumn("uuid")
    id: string;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: false }) 
    value: number;

    @Column("integer",{nullable: false})
    size: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Schedules, schedules => schedules.property)
    @JoinColumn()
    schedules: Schedules[];

    @OneToOne(() => Addresses, {
        nullable: false,
        eager: true
    })
    @JoinColumn()
    address: Addresses;
    
    @ManyToOne(() => Categories, categories => categories.properties)
    @JoinColumn()
    categories: Categories;
    
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
