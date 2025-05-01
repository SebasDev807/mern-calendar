export interface Form {
    email: string;
    username: string;
    name: string;
    password: string;
}

export type LoginForm = Pick<Form, 'email' | 'password'>;
export type RegisterForm = Pick<Form, 'email' | 'password' | 'name'>;
export type PartialForm = Partial<Form>;

