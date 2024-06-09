/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SbEmployeeWhereInput } from "./SbEmployeeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SbEmployeeOrderByInput } from "./SbEmployeeOrderByInput";

@ArgsType()
class SbEmployeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SbEmployeeWhereInput, { nullable: true })
  @Type(() => SbEmployeeWhereInput)
  where?: SbEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: [SbEmployeeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SbEmployeeOrderByInput], { nullable: true })
  @Type(() => SbEmployeeOrderByInput)
  orderBy?: Array<SbEmployeeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SbEmployeeFindManyArgs as SbEmployeeFindManyArgs };
