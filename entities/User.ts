import { Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    userName!: string

    @Column()
    email!: string

    @Column()
    password!: string
    
}