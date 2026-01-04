import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ACCOUNT } from '../graphql/mutations';
import { FETCH_ACCOUNTS } from '../graphql/queries';
import { Account } from '../graphql/interfaces';

const AccountList = () => {
    const { data, loading, error } = useQuery<{ accounts: Account[] }>(FETCH_ACCOUNTS);
    const [createAccount] = useMutation(CREATE_ACCOUNT);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error.message}</p>;

    return (
        <div>
            {data?.accounts.map(acc => (
                <div key={acc.id}>
                    {acc.type} - {acc.balance}€
                </div>
            ))}
        </div>
    );
};

export default AccountList;
