import City from "database/models/city";

export const cityResolver = {
  Query: {
    cities: async (_, { city }) => {
      try {
        const result = await City.find({
          name: new RegExp(city, "i"),
        });
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
