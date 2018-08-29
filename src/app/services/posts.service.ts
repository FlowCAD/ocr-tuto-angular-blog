import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from '../models/post.model';

@Injectable()
export class PostsService {
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    saveAndEmit() {
        this.savePosts();
        this.emitPosts();
    }
    getPosts() {
        firebase.database()
            .ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            });
    }

    getSinglePost(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/posts/' + id).once('value').then(
                    (data) => {
                        resolve(data.val());
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    searchPost(post: Post) {
        const postIndex = this.posts.findIndex(
            (postElement) => {
                if (postElement === post) {
                    return true;
                }
            }
        );
        return postIndex;
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.saveAndEmit();
    }

    removePost(post: Post) {
        const index = this.searchPost(post);
        this.posts.splice(index, 1);
        this.saveAndEmit();
    }

    setLoveIt(post: Post) {
        const index = this.searchPost(post);
        this.posts[index].loveIts++;
        this.saveAndEmit();
    }

    setDontLoveIt(post: Post) {
        const index = this.searchPost(post);
        this.posts[index].loveIts--;
        this.saveAndEmit();
    }
}
