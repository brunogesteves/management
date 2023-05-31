import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class BranchResult {
  @Field(() => Number)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  city!: string;

  @Field(() => String)
  state!: string;

  @Field(() => String)
  phone!: string;
}
