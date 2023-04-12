import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseInfo from '../BaseInfo';

describe('BaseInfo component', () => {
    it('should render the component', () => {
        // Act
        render(
            <BaseInfo
                data={{
                    name: 'Goblin',
                    size: 'Small',
                    type: 'Humanoid',
                    alignment: 'Neutral Evil',
                    armor_class: 15,
                    armor_desc: 'natural armor',
                    hit_points: 7,
                    hit_dice: '2d6',
                    speed: {
                        walk: 30,
                    },
                }}
            />,
        );

        // Assert
        expect(screen.getByText('Goblin')).toBeInTheDocument();
        expect(screen.getByText('Small Humanoid, Neutral Evil')).toBeInTheDocument();
        expect(screen.getByText((content) => content.startsWith('Armor'))).toBeInTheDocument();
        expect(screen.getByText('15', { selector: 'p' })).toBeInTheDocument();
        expect(screen.getByText('(natural armor)', { selector: 'span' })).toBeInTheDocument();
        expect(screen.getByText((content) => content.startsWith('Hit Points'))).toBeInTheDocument();
        expect(screen.getByText('7', { selector: 'p' })).toBeInTheDocument();
        expect(screen.getByText('(2d6)', { selector: 'span' })).toBeInTheDocument();
        expect(screen.getByText((content) => content.startsWith('Speed'))).toBeInTheDocument();
        expect(screen.getByText('walk 30ft', { selector: 'span' })).toBeInTheDocument();
    });

    it('should render the component without armor description', () => {
        // Act
        render(
            <BaseInfo
                data={{
                    name: 'Goblin',
                    size: 'Small',
                    type: 'Humanoid',
                    alignment: 'Neutral Evil',
                    armor_class: 15,
                    armor_desc: '',
                    hit_points: 7,
                    hit_dice: '2d6',
                    speed: {
                        walk: 30,
                    },
                }}
            />,
        );

        // Assert
        expect(
            screen.getByText((content) => content.startsWith('Armor Class')),
        ).toBeInTheDocument();
        expect(screen.getByText('15', { selector: 'p' })).toBeInTheDocument();
        expect(screen.queryByText('(natural armor)', { selector: 'span' })).not.toBeInTheDocument();
    });

    it('should render the component without hit dice', () => {
        // Act
        render(
            <BaseInfo
                data={{
                    name: 'Goblin',
                    size: 'Small',
                    type: 'Humanoid',
                    alignment: 'Neutral Evil',
                    armor_class: 15,
                    armor_desc: 'natural armor',
                    hit_points: 7,
                    hit_dice: '',
                    speed: {
                        walk: 30,
                    },
                }}
            />,
        );

        // Assert
        expect(screen.getByText((content) => content.startsWith('Hit Points'))).toBeInTheDocument();
        expect(screen.getByText('7', { selector: 'p' })).toBeInTheDocument();
        expect(screen.queryByText('(2d6)', { selector: 'span' })).not.toBeInTheDocument();
    });

    it('should render the component with multiple speeds', () => {
        // Act
        render(
            <BaseInfo
                data={{
                    name: 'Goblin',
                    size: 'Small',
                    type: 'Humanoid',
                    alignment: 'Neutral Evil',
                    armor_class: 15,
                    armor_desc: 'natural armor',
                    hit_points: 7,
                    hit_dice: '2d6',
                    speed: {
                        walk: 30,
                        fly: 60,
                    },
                }}
            />,
        );

        // Assert
        expect(screen.getByText((content) => content.startsWith('Speed'))).toBeInTheDocument();
        expect(screen.getByText('walk 30ft', { selector: 'span' })).toBeInTheDocument();
        expect(screen.getByText('fly 60ft', { selector: 'span' })).toBeInTheDocument();
    });

    it('should render the component without armor description and hit dice', () => {
        // Act
        render(
            <BaseInfo
                data={{
                    name: 'Goblin',
                    size: 'Small',
                    type: 'Humanoid',
                    alignment: 'Neutral Evil',
                    armor_class: 15,
                    armor_desc: '',
                    hit_points: 7,
                    hit_dice: '',
                    speed: {
                        walk: 30,
                    },
                }}
            />,
        );

        // Assert
        expect(
            screen.getByText((content) => content.startsWith('Armor Class')),
        ).toBeInTheDocument();
        expect(screen.getByText('15', { selector: 'p' })).toBeInTheDocument();
        expect(screen.queryByText('(natural armor)', { selector: 'span' })).not.toBeInTheDocument();

        expect(screen.getByText((content) => content.startsWith('Hit Points'))).toBeInTheDocument();
        expect(screen.getByText('7', { selector: 'p' })).toBeInTheDocument();
        expect(screen.queryByText('(2d6)', { selector: 'span' })).not.toBeInTheDocument();
    });
});
