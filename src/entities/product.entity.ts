import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'product',
})
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'product_id' })
  @Field()
  id: string;

  @Column({ name: 'product_name' })
  @Field()
  name: string;

  @Column({ name: 'description', nullable: true })
  @Field()
  description: string;

  @Column({ type: 'float' })
  @Field((type) => Float)
  price: number;

  @Column()
  @Field((type) => Int)
  quantity: number;

  @Column({ name: 'created_at', default: new Date() })
  @Field((type) => Date)
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field((type) => Date)
  updatedAt: Date;
}
