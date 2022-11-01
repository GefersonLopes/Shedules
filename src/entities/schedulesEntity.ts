import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    Timestamp,
    OneToMany,
    CreateDateColumn,
} from "typeorm";
import { User } from "./userEntity";
import { v4 as uuid } from "uuid";
import { Property } from "./propertiesEntity";

@Entity()
export class Schedules {
    @PrimaryColumn("uuid")
    id: string;

    @Column({nullable: false, type: "date"})
    date: string;

    @Column({nullable: false, type: "time"})
    hour: string;

    @ManyToOne(() => User, user => user.schedules, {
        nullable: false,
        eager: true
    })
    user: User;

    @ManyToOne((type) => Property, property => property.schedules, {
        nullable: false,
        eager: true
    })
    property: Property;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
