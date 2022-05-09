import { Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prescription extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    userEmail!: string

    @Column()
    medicationName!: string

    @Column()
    pharmacyName!: string

    @Column()
    hospitalName!: string

    @Column()
    prescriptionDate!: string
    
}