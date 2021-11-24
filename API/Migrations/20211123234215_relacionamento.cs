using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class relacionamento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "idUsuario",
                table: "perfils",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "jogoId",
                table: "perfils",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "usuarioId",
                table: "perfils",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_perfils_jogoId",
                table: "perfils",
                column: "jogoId");

            migrationBuilder.CreateIndex(
                name: "IX_perfils_usuarioId",
                table: "perfils",
                column: "usuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_perfils_jogos_jogoId",
                table: "perfils",
                column: "jogoId",
                principalTable: "jogos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_perfils_usuarios_usuarioId",
                table: "perfils",
                column: "usuarioId",
                principalTable: "usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_perfils_jogos_jogoId",
                table: "perfils");

            migrationBuilder.DropForeignKey(
                name: "FK_perfils_usuarios_usuarioId",
                table: "perfils");

            migrationBuilder.DropIndex(
                name: "IX_perfils_jogoId",
                table: "perfils");

            migrationBuilder.DropIndex(
                name: "IX_perfils_usuarioId",
                table: "perfils");

            migrationBuilder.DropColumn(
                name: "idUsuario",
                table: "perfils");

            migrationBuilder.DropColumn(
                name: "jogoId",
                table: "perfils");

            migrationBuilder.DropColumn(
                name: "usuarioId",
                table: "perfils");
        }
    }
}
