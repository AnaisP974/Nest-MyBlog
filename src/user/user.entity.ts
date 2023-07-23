import { Exclude } from 'class-transformer';
import { Post } from 'src/post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly username: string;

  @Column({unique : true})
  readonly email: string;

  @Column({select: false})
  @Exclude()
  readonly password: string;
  
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]
}