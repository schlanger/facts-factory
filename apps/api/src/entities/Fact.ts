import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Fact {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    theme: string

    @Column()
    text: string
}
