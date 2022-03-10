import { Bot } from "../bot.ts";
import { DiscordGuildWidget } from "../types/discord.ts";

export function transformWidget(bot: Bot, payload: DiscordGuildWidget) {
  return {
    id: bot.transformers.snowflake(payload.id),
    name: payload.name,
    instant_invite: payload.instant_invite,
    channels: payload.channels.map((channel) => ({
      id: bot.transformers.snowflake(channel.id),
      name: channel.name,
      position: channel.position,
    })),
    members: payload.members.map((member) => ({
      id: bot.transformers.snowflake(member.id),
      username: member.username,
      discriminator: Number(member.discriminator),
      avatar: member.avatar ? bot.utils.iconHashToBigInt(member.avatar) : undefined,
      status: member.status,
      avatarUrl: member.avatar_url,
    })),
    presenceCount: payload.presence_count,
  };
}

export interface GuildWidget extends ReturnType<typeof transformWidget> {}
