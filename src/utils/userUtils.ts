import storage from "@react-native-async-storage/async-storage";
import { User } from "../models/user";

class UserUtils {
  private readonly document = "@user";
  private readonly storage = storage;

  public async get(): Promise<User> {
    let jsonArray = await this.storage.getItem(this.document);
    if (!jsonArray) jsonArray = '[]';
    return JSON.parse(jsonArray);
  }

  public async save(user: User): Promise<boolean> {
    try {
      this.store(user);
      return true;
    } catch (error) {
      throw `Erro ao salvar: ${error}`;
    }
  }

  public async logout() {
    try{
      await this.storage.clear();
    }catch(error){
      throw `Erro ao salvar: ${error}`;
    }
  }

  private async store(user: User) {
    await this.storage.setItem(this.document, JSON.stringify(user));
  }
}

export default new UserUtils();
