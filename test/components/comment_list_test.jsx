import {renderComponent,expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList',()=>{
    let component;

    beforeEach(()=>{
        const props = {comments:['new Comment','Other New Comment']};
        component = renderComponent(CommentList,null,props);
    });

    // judge the length of the elemetn 'li';
    it('shows an LI for each comment',()=>{
        expect(component.find('li').length).to.equal(2);
    });
    // analyzing contains an element.
    it('shows each comment that is provider',()=>{
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });
});

