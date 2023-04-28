BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Account] (
    [id] NVARCHAR(255) NOT NULL,
    [userId] NVARCHAR(255),
    [type] NVARCHAR(255),
    [provider] NVARCHAR(255),
    [providerAccountId] NVARCHAR(255),
    [refresh_token] NVARCHAR(max),
    [access_token] NVARCHAR(max),
    [expires_at] INT,
    [token_type] NVARCHAR(255),
    [scope] NVARCHAR(255),
    [id_token] NVARCHAR(max),
    [session_state] NVARCHAR(255),
    CONSTRAINT [PK__Account__3213E83FD473D917] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [account_provider_providerAccountId] UNIQUE NONCLUSTERED ([provider],[providerAccountId])
);

-- CreateTable
CREATE TABLE [dbo].[Session] (
    [id] NVARCHAR(255) NOT NULL,
    [sessionToken] NVARCHAR(255),
    [userId] NVARCHAR(255),
    [expires] DATETIME2,
    CONSTRAINT [PK__Session__3213E83F23706105] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__Session__7D789C12B9CB2552] UNIQUE NONCLUSTERED ([sessionToken])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(255) NOT NULL,
    [name] NVARCHAR(255),
    [email] NVARCHAR(255),
    [emailVerified] DATETIME2,
    [image] NVARCHAR(max),
    CONSTRAINT [PK__User__3213E83FE7979CED] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__User__AB6E6164169B6C6A] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[VerificationToken] (
    [id] INT NOT NULL IDENTITY(1,1),
    [token] NVARCHAR(1000) NOT NULL,
    [expires] DATETIME2,
    CONSTRAINT [VerificationToken_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [VerificationToken_token_key] UNIQUE NONCLUSTERED ([token])
);

-- AddForeignKey
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [account_userId_fk] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Session] ADD CONSTRAINT [session_userId_fk] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
