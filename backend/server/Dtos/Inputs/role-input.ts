import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class DeleteRoleInput {
  @Field()
  id!: number;
}

@InputType()
export class AddRoleInput {
  @Field()
  @MaxLength(55)
  name!: string;
}
