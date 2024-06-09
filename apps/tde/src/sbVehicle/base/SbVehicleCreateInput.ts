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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SbProviderWhereUniqueInput } from "../../sbProvider/base/SbProviderWhereUniqueInput";
import { Type } from "class-transformer";
import { SbRouteWhereUniqueInput } from "../../sbRoute/base/SbRouteWhereUniqueInput";
import { SbEmployeeCreateNestedManyWithoutSbVehiclesInput } from "./SbEmployeeCreateNestedManyWithoutSbVehiclesInput";
import { EnumSbVehicleShift } from "./EnumSbVehicleShift";
import { EnumSbVehicleVehicleType } from "./EnumSbVehicleVehicleType";

@InputType()
class SbVehicleCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  driver?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  driverPhoto?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  noPol?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  noUnit?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNo?: string | null;

  @ApiProperty({
    required: false,
    type: () => SbProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => SbProviderWhereUniqueInput, {
    nullable: true,
  })
  providerId?: SbProviderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbRouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbRouteWhereUniqueInput)
  @IsOptional()
  @Field(() => SbRouteWhereUniqueInput, {
    nullable: true,
  })
  routeId?: SbRouteWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeCreateNestedManyWithoutSbVehiclesInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeCreateNestedManyWithoutSbVehiclesInput)
  @IsOptional()
  @Field(() => SbEmployeeCreateNestedManyWithoutSbVehiclesInput, {
    nullable: true,
  })
  sbEmployee?: SbEmployeeCreateNestedManyWithoutSbVehiclesInput;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeCreateNestedManyWithoutSbVehiclesInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeCreateNestedManyWithoutSbVehiclesInput)
  @IsOptional()
  @Field(() => SbEmployeeCreateNestedManyWithoutSbVehiclesInput, {
    nullable: true,
  })
  sbEmployees?: SbEmployeeCreateNestedManyWithoutSbVehiclesInput;

  @ApiProperty({
    required: false,
    enum: EnumSbVehicleShift,
    isArray: true,
  })
  @IsEnum(EnumSbVehicleShift, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSbVehicleShift], {
    nullable: true,
  })
  shift?: Array<"Shift_1" | "Shift_2">;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  vehiclePhoto?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumSbVehicleVehicleType,
  })
  @IsEnum(EnumSbVehicleVehicleType)
  @IsOptional()
  @Field(() => EnumSbVehicleVehicleType, {
    nullable: true,
  })
  vehicleType?: "BigBus" | "MiniBus" | null;
}

export { SbVehicleCreateInput as SbVehicleCreateInput };
