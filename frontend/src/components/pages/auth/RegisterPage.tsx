///home/takuma/rakuten-clone/frontend/src/components/pages/auth/RegisterPage.tsx

import React from 'react';
import {
    Box,
    Container,
    Snackbar,
    Alert,
    Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import { register } from '../../../api/Auth';

const RegisterPage: React.FC = () => {
    const [success, setSuccess] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('');


    //フォームが送信されたときに実行される関数
    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();//ブラウザのフォーム自動送信をストップ
        setSuccess(false);//今から新しい送信を始めるから、前回の成功状態は消しておこう
        setError('');//前回のエラーメッセージを消している

        const formData = new FormData(event.currentTarget);//フォームに入植された全データを取得
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const response = await register(username, password);

        if (response.error) {
            setError(response.error);
        } else {
            setSuccess(true);
            event.currentTarget.reset();
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
            }}
        >
            <Snackbar
                open={success}
                autoHideDuration={2000}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="success">
                    ユーザー登録が完了しました
                </Alert>
            </Snackbar>

            <Snackbar
                open={error.length > 0}
                autoHideDuration={2000}
                onClose={() => setError('')}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="error">{error}</Alert>
            </Snackbar>

            <Container
                maxWidth="xs"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <RegisterForm handleSubmit={handleSubmit} />
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Link component={RouterLink} to="/login">
                            すでにアカウントをお持ちですか？ログイン
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default RegisterPage;
