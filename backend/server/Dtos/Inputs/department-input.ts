import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class DeleteDepartmentInput {
  @Field()
  id!: number;
}

@InputType()
export class addDepartmentInput {
  @Field()
  @MaxLength(30)
  name!: string;
}
