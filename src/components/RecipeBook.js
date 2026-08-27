import React from 'react'
import { Modal, Frame } from '@react95/core'
import RecipeFlowchart from './RecipeFlowchart'

function RecipeBook({ recipes, closeRecipeBook, isMobile }) {
    return (
        <Modal
            icon="help_book"
            title="Recipes"
            closeModal={closeRecipeBook}
            style={{
                left: isMobile ? '5%' : '20%',
                top: isMobile ? '3%' : '10%',
                width: isMobile ? '90%' : 560,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={16}
                style={{
                    overflowY: 'auto',
                    maxHeight: '70vh',
                }}
            >
                {
                    recipes.map((recipe) => (
                        <RecipeFlowchart key={recipe.id} recipe={recipe} />
                    ))
                }
            </Frame>
        </Modal>
    )
}

export default RecipeBook
