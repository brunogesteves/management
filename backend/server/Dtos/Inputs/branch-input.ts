import { Field, InputType } from 'type-graphql';

@InputType()
export class DeleteBranchInput {
  @Field()
  id!: number;
}

@InputType()
export class addUpdateBrancInput {
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
