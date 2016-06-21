import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app";

describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('renders something', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('has a child element with class .comment-lsit ', () => {
        expect(component.find('.comment-list')).to.exist;
    })
});
