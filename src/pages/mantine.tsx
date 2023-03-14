import { Button, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSettings, IconSun, IconMoonStars } from '@tabler/icons-react';

export default function Mantine () {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';


    return (<div>
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
        <Button sx={{ margin: "5px" }} leftIcon={<IconSettings size={19} />} loading={true}>
            Connect to database
        </Button>
        <Button sx={[(theme) => ({ backgroundColor: theme.colors.oceanblue[0], margin: "5px" }), { color: dark ? "black" : "white" }]}>{dark ? "dark" : "light"}</Button>
        <Button color="oceanblue.0" sx={{ margin: "20px", color: dark ? "black" : "white" }}>{dark ? "dark" : "light"}</Button>
    </div>
    )
}