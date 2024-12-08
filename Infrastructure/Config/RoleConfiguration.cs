﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Config;

public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
{
    public void Configure(EntityTypeBuilder<IdentityRole> builder)
    {
        builder.HasData(
            new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "Admin", NormalizedName = "ADMIN" },
            new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "Customer", NormalizedName = "CUSTOMER" }
        );
    }
}