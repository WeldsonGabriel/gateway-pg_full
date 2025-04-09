package domain

import "errors"

var (
	// Account errors
	ErrAccountNotFound = errors.New("account not found")
	// API Key errors
	ErrDuplicatedAPIKey = errors.New("API key already exists")
	// Invoices errors
	ErrInvoiceNotFound = errors.New("invoice not found")
	// Authorization errors
	ErrUnauthorized = errors.New("unauthorized access")
)
