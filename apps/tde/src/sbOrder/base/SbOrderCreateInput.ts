/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { SbEmployeeWhereUniqueInput } from "../../sbEmployee/base/SbEmployeeWhereUniqueInput";
import { EnumSbOrderShift } from "./EnumSbOrderShift";

@InputType()
class SbOrderCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => SbEmployeeWhereUniqueInput, {
    nullable: true,
  })
  employeeId?: SbEmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSbOrderShift,
  })
  @IsEnum(EnumSbOrderShift)
  @IsOptional()
  @Field(() => EnumSbOrderShift, {
    nullable: true,
  })
  shift?: "Shift_1" | "Shift_2" | null;
}

export { SbOrderCreateInput as SbOrderCreateInput };
