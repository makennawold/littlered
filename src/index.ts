import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post"
import microConfig from "./mikro-orm.config";
import express from 'express';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();
    // const post = orm.em.create(Post, {title: 'my first post'}) //this creates an instance of post
    // await orm.em.persistAndFlush(post); //adds post to database

    // const posts = await orm.em.find(Post, {});
    // console.log(posts)
}

main().catch((err) => {
    console.error(err);
});


console.log("hello world")