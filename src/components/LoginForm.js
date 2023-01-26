import React from "react";
import { Button, Card, Form, Input } from "./form";

const LoginForm = () => {
    return (
        <Card>
            <Form>
                <label>
                    Name
                </label>
                <Input type='email' />

                <label>
                    Password
                </label>
                <Input type='password' />

                <Button type='submit'>Login</Button>
            </Form>
        </Card>
    );
};
export default LoginForm;