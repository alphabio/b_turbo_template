# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this template, please report it by:

1. **Do NOT** open a public issue
2. Email the maintainers at security@alphabio.example.com (replace with actual email)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work with you to address the issue.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Best Practices

When using this template:

1. **Dependencies**: Regularly update dependencies to patch known vulnerabilities
2. **Environment Variables**: Never commit secrets or API keys
3. **Code Review**: Review all code changes before merging
4. **CI/CD**: Use automated security scanning in your pipeline
5. **Access Control**: Limit repository access to trusted contributors

## Agent Session Security

When AI agents work on this codebase:

1. **No Secrets in Code**: Agents must never commit API keys, passwords, or tokens
2. **Dependency Scanning**: Run security scans before adding new dependencies
3. **Code Review**: All agent changes should be reviewed by humans
4. **Audit Trail**: Maintain clear commit messages for all changes
5. **Isolation**: Agents should work in isolated branches

## Automated Security Checks

We recommend setting up:

- Dependabot for dependency updates
- CodeQL for code scanning
- Secret scanning for credential detection
- SAST (Static Application Security Testing) tools

## Contact

For security concerns, contact: security@alphabio.example.com (replace with actual email)
