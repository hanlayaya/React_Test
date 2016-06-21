import {renderComponent, expect} from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe('this tests is for commentbox', () => {
    let component;

    beforeEach(
        () => {
            component = renderComponent(CommentBox);
        }
    );

    it('has a className comment-box?', ()=> {

        expect(component).to.have.class('comment-box');
    });

    it('has a textarea ? ', ()=> {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', ()=> {

        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows the text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submited ,clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    })

});
