import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class DepartmentResult {
  @Field(() => String)
  name!: string;

  @Field(() => Number)
  id!: number;
}
