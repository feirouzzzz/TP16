import { AccountType, TransactionType } from './types';

// Interface d'un compte
export interface Account {
    id: string;
    balance: number;
    createdAt: string;
    type: AccountType;
}

// Interface d'une transaction
export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    date: string;
    account: Account;
}

// Statistiques de solde
export interface BalanceStats {
    count: number;
    sum: number;
    average: number;
}

// Statistiques des transactions
export interface TransactionStats {
    count: number;
    totalDeposits: number;
    totalWithdrawals: number;
}

// Requête de création de compte
export interface AccountInput {
    balance: number;
    type: AccountType;
}

// Requête de création de transaction
export interface TransactionInput {
    type: TransactionType;
    amount: number;
    accountId: string;
}
