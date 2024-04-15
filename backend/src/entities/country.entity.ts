import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  code: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continentCode: string;
}
