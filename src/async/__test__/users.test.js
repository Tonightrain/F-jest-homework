import axios from "axios";
import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const users = [{ name: "Mike" }];
    const response = { data: users };
    axios.get.mockResolvedValue(response);

    await expect(getUsers()).resolves.toEqual(users);
  });
});
