# OAuth 2.0 Guide

This repository provides a comprehensive guide to OAuth 2.0 authentication and authorization.

## What is OAuth?

OAuth (Open Authorization) is an open standard for access delegation, commonly used to grant websites or applications access to user information without exposing credentials.

### Why OAuth?

- **Security**: Users don't share passwords with third-party applications
- **Limited Access**: Scopes restrict what data applications can access
- **Revocable**: Users can revoke access at any time
- **Standardized**: Industry-wide protocol with widespread adoption

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Resource Owner** | The user who grants access to their data |
| **Client** | The application requesting access |
| **Authorization Server** | The server that authenticates and issues tokens |
| **Resource Server** | The server hosting protected resources |
| **Access Token** | Token that grants access to protected resources |
| **Refresh Token** | Token used to obtain new access tokens |

## OAuth Flows

This guide covers several OAuth 2.0 flows:

1. **[Authorization Code Flow](Authorization-Code-Flow.md)** - For server-side applications (+ PKCE for SPAs/mobile)
2. **[Client Credentials Flow](Client-Credentials-Flow.md)** - For machine-to-machine communication
3. **[Device Code Flow](Device-Code-Flow.md)** - For devices without browsers (TVs, IoT, CLI)
4. **[Refresh Token Flow](Refresh-Token-Flow.md)** - For obtaining new access tokens

## Quick Start

To implement OAuth, you'll need to:

1. Register your application with the authorization server
2. Configure redirect URIs and scopes
3. Implement the chosen flow
4. Handle tokens securely

## Resources

- [RFC 6749 - OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [OAuth 2.0 Security Best Practices](https://tools.ietf.org/html/rfc6819)