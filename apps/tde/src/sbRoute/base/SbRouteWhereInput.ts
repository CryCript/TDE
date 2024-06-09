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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SbPickupPointListRelationFilter } from "../../sbPickupPoint/base/SbPickupPointListRelationFilter";
import { SbVehicleListRelationFilter } from "../../sbVehicle/base/SbVehicleListRelationFilter";

@InputType()
class SbRouteWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  maps?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  route?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SbPickupPointListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SbPickupPointListRelationFilter)
  @IsOptional()
  @Field(() => SbPickupPointListRelationFilter, {
    nullable: true,
  })
  sbPickupPoints?: SbPickupPointListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SbVehicleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SbVehicleListRelationFilter)
  @IsOptional()
  @Field(() => SbVehicleListRelationFilter, {
    nullable: true,
  })
  sbVehicles?: SbVehicleListRelationFilter;
}

export { SbRouteWhereInput as SbRouteWhereInput };
