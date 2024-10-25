import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './path/to/your/todo_idl';
import { Principal } from '@dfinity/principal';

const agent = new HttpAgent({ host: "http://localhost:8000" });
const todoCanisterId = Principal.fromText('your_canister_id');

const todoActor = Actor.createActor(idlFactory, {
    agent,
    canisterId: todoCanisterId,
});

export const addTodo = async (task) => {
    return await todoActor.addTodo(task);
};

export const getTodos = async () => {
    return await todoActor.getTodos();
};
