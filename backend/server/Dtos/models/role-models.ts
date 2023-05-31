import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class RoleResult {
  @Field(() => String)
  name!: string;

  @Field(() => Number)
  id!: number;
}
