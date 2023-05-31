import { Arg, Mutation, Resolver } from 'type-graphql';
import { Field, InputType } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

var Readable = require('stream').Readable;

const prisma = new PrismaClient();

@InputType()
class FileInput {
  // @Field()
  // id!: number;

  @Field()
  name!: string;

  @Field()
  encoding!: string;
}

@Resolver()
export class UploadResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Arg('data') data: FileInput) {
    const { name, encoding } = data;

    try {
      var base64Data = encoding.replace('data:image/png;base64,', '');

      fs.writeFile(`./uploads/${name}`, base64Data, 'base64', function (err) {
        console.log(err);
      });

      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
