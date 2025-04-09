package service

import (
	"github.com/devfullcycle/imersao22/go-gateway/internal/domain"
	"github.com/devfullcycle/imersao22/go-gateway/internal/dto"
)

type AccountService struct {
	repository domain.AccountRepository
}

func NewAccountService(repository domain.AccountRepository) *AccountService {
	return &AccountService{repository: repository}
}

func (s *AccountService) CreateAccount(input *dto.CreateAccountInput) (*dto.AccountOutput, error) {
	account := dto.ToAccount(input)
	existingAccount, err := s.repository.FindByAPIKey(account.APIKey)
	if err != nil && err != domain.ErrAccountNotFound {
		return nil, err
	}
	if existingAccount != nil {
		return nil, domain.ErrDuplicatedAPIKey
	}
	err = s.repository.Save(account)
	if err != nil {
		return nil, err
	}
	return dto.FromAccount(account), nil
}

func (s *AccountService) UpdateBalance(APIKey string, amount float64) (*dto.AccountOutput, error) {
	account, err := s.repository.FindByAPIKey(APIKey)
	if err != nil {
		return nil, err
	}
	account.AddBalance(amount)
	err = s.repository.UpdateBalance(account)
	if err != nil {
		return nil, err
	}
	return dto.FromAccount(account), nil
}

func (s *AccountService) FindByAPIKey(APIKey string) (*dto.AccountOutput, error) {
	account, err := s.repository.FindByAPIKey(APIKey)
	if err != nil {
		return nil, err
	}
	return dto.FromAccount(account), nil
}

func (s *AccountService) FindById(id string) (*dto.AccountOutput, error) {
	account, err := s.repository.FindById(id)
	if err != nil {
		return nil, err
	}
	return dto.FromAccount(account), nil
}

