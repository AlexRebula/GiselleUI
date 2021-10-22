import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    scrollY = new BehaviorSubject(0);
    scrollY$ = this.scrollY.asObservable();
    constructor() {}

    parseMarkdown(markdownText: string) {
        const htmlText = markdownText
            .replace(/^### (.*$)/gim, '<h3 class="title is-3">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="title is-2">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="title is-1">$1</h1>')
            .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
            .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
            .replace(/\n$/gim, '<br />');

        return htmlText.trim();
    }

    deepCloneObject(obj: any) {
        if (null == obj || 'object' !== typeof obj) {
            return obj;
        }
        const copy = obj.constructor();
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line
            const r = (Math.random() * 16) | 0;
            // tslint:disable-next-line
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    updateScrollY(value: number): void {
        this.scrollY.next(value);
    }
}
