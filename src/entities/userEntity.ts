import { Column, PrimaryColumn, Entity, UpdateDateColumn, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";
import { Schedules } from "./schedulesEntity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false, unique: true})
  email: string;

  @Column({nullable: false})
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({nullable: false})
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules, schedules => schedules.user)
  @JoinColumn()
  schedules: Schedules[];

  constructor() {
    this.id = uuid();
  };
};
