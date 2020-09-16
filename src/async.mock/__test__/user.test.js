import axios from "axios";
import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "Mike";
    const password = "123456";
    const except = "success";
    const response = { data: except };
    axios.post.mockResolvedValue(response);
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => true);
    await expect(register(username, password)).resolves.toEqual(except);
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const username = "Mike";
    const password = "123456";
    verifyPassword.mockImplementation(() => false);
    await expect(register(username, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
