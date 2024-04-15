import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true, length: 2 })
  code: string;

  @Field()
  @Column({ unique: true, length: 100 })
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column({ length: 3 })
  continentCode: string;
}
