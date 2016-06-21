import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions/index';


describe('actions',()=>{
    // row one
    describe('saveComment',()=>{
        // judge types
        it('has a correct types',()=>{
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has a correct payload',()=>{
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    })
})