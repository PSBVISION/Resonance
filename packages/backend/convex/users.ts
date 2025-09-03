import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
})


export const addition = mutation({
  args:{},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if(identity === null){
      throw new Error("not signed in");
    }
    const orgId = identity.orgId as String;
    if(!orgId){
      throw new Error("Missing Organization ID");
    }
    throw new Error("tracking test");
    return await ctx.db.insert("users",{name: "dadboss"});
  }
})