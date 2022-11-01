import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Property } from "./propertiesEntity";
import { v4 as uuid } from "uuid";

@Entity()
export class Categories {
    @PrimaryColumn("uuid")
    id: string;

    @Column({nullable: false, unique: true})
    name: string;

    @OneToMany(() => Property, property => property.categories)
    @JoinColumn()
    properties: Property[];

    constructor() {
        this.id = uuid();
    }
}
