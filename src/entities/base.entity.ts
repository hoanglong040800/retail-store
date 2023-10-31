import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class EBase {
  @Column({
    name: "created_at",
    type: "datetime",
  })
  createdAt: Date;

  @Column({
    name: "created_by",
    type: "uuid",
    nullable: true,
  })
  createdBy: string;

  @Column({
    name: "updated_at",
    type: "datetime",
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    name: "updated_by",
    type: "uuid",
  })
  updatedBy: string;

  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: number;
}
