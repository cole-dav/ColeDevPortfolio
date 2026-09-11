import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid #2f6f3e;
    padding: 10px 14px;
    margin-bottom: 24px;
    font-size: 0.85em;
`;

const Title = styled.h3`
    margin: 0 0 8px;
`;

const SectionLabel = styled.p`
    margin: 10px 0 4px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.85em;
`;

const IngredientList = styled.ul`
    margin: 0;
    padding-left: 18px;
`;

const StepList = styled.ol`
    margin: 0;
    padding-left: 18px;
`;

const StyledLi = styled.li`
    margin-bottom: 3px;
`;

const IngredientLink = styled.a`
    margin-left: 6px;
    font-size: 0.85em;
`;

const Note = styled.p`
    margin: 10px 0 0;
    font-style: italic;
    color: #444;
`;

function Ingredient({ item }) {
    if (typeof item === 'string') {
        return <StyledLi>{item}</StyledLi>;
    }
    return (
        <StyledLi>
            {item.text}
            {item.link && (
                <IngredientLink href={item.link} target="_blank" rel="noopener noreferrer">
                    (info)
                </IngredientLink>
            )}
        </StyledLi>
    );
}

function RecipeCard({ recipe }) {
    const { title, ingredients, steps, note } = recipe;
    return (
        <Wrapper>
            <Title>{title}</Title>
            <SectionLabel>Ingredients</SectionLabel>
            <IngredientList>
                {ingredients.map((item, idx) => (
                    <Ingredient key={idx} item={item} />
                ))}
            </IngredientList>
            {steps && steps.length > 0 && (
                <>
                    <SectionLabel>Steps</SectionLabel>
                    <StepList>
                        {steps.map((step, idx) => (
                            <StyledLi key={idx}>{step}</StyledLi>
                        ))}
                    </StepList>
                </>
            )}
            {note && <Note>{note}</Note>}
        </Wrapper>
    )
}

export default RecipeCard
