import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 24px;
    font-size: 0.85em;
`;

const Title = styled.h3`
    margin: 0 0 6px;
`;

const PrepCell = styled.td`
    border: 1px solid #2f6f3e;
    padding: 6px 10px;
    text-align: center;
    font-weight: bold;
`;

const IngredientCell = styled.td`
    border: 1px solid #2f6f3e;
    padding: 4px 8px;
    white-space: nowrap;
`;

const StepCell = styled.td`
    border: 1px solid #2f6f3e;
    padding: 4px 6px;
    text-align: center;
    vertical-align: middle;
`;

const ResultCell = styled.td`
    border: 1px solid #2f6f3e;
    padding: 4px 10px;
    text-align: center;
    vertical-align: middle;
    white-space: pre-line;
    font-weight: bold;
`;

function stepAt(column, rowIdx) {
    const group = column.groups.find(([start, count]) => rowIdx >= start && rowIdx < start + count);
    if (!group) {
        return null;
    }
    const [start, count] = group;
    return start === rowIdx ? count : 0;
}

function RecipeFlowchart({ recipe }) {
    const { title, prep, rows, columns, result } = recipe;
    const totalCols = 1 + columns.length + 1;

    return (
        <div>
            <Title>{title}</Title>
            <Table>
                <tbody>
                    {prep.map((line, idx) => (
                        <tr key={idx}>
                            <PrepCell colSpan={totalCols}>{line}</PrepCell>
                        </tr>
                    ))}
                    {rows.map((ingredient, rowIdx) => (
                        <tr key={rowIdx}>
                            <IngredientCell>{ingredient}</IngredientCell>
                            {columns.map((column, colIdx) => {
                                const span = stepAt(column, rowIdx);
                                if (span === 0) {
                                    return null;
                                }
                                if (span === null) {
                                    return <StepCell key={colIdx} />;
                                }
                                return (
                                    <StepCell key={colIdx} rowSpan={span}>
                                        {column.label}
                                    </StepCell>
                                );
                            })}
                            {rowIdx === 0 && (
                                <ResultCell rowSpan={rows.length}>{result}</ResultCell>
                            )}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default RecipeFlowchart
