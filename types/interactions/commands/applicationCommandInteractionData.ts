import { InteractionGuildMember } from "../interactionGuildMember.ts";
import { InteractionDataOption } from "./applicationCommandInteractionDataOption.ts";
import { Attachment } from "../../messages/attachment.ts";
import { MessageComponentTypes } from "../../messages/components/messageComponentTypes.ts";
import { MessageComponents } from "../../messages/components/messageComponents.ts";
import { Message } from "../../messages/message.ts";
import { User } from "../../users/user.ts";
import { Role } from "../../permissions/role.ts";
import { Channel } from "../../channels/channel.ts";

export interface InteractionData {
  /** The type of component */
  componentType?: MessageComponentTypes;
  /** The custom id provided for this component. */
  customId?: string;
  /** The components if its a Modal Submit interaction. */
  components?: MessageComponents;
  /** The values chosen by the user. */
  values?: string[];
  /** The Id of the invoked command */
  id: string;
  /** The name of the invoked command */
  name: string;
  /** Converted users + roles + channels + attachments */
  resolved?: {
    /** The Ids and Message objects */
    messages?: Record<string, Message>;
    /** The Ids and User objects */
    users?: Record<string, User>;
    /** The Ids and partial Member objects */
    members?: Record<string, Omit<InteractionGuildMember, "user" | "deaf" | "mute">>;
    /** The Ids and Role objects */
    roles?: Record<string, Role>;
    /** The Ids and partial Channel objects */
    channels?: Record<string, Pick<Channel, "id" | "name" | "type" | "permissions">>;
    /** The ids and attachment objects */
    attachments: Record<string, Attachment>;
  };
  /** The params + values from the user */
  options?: InteractionDataOption[];
  /** The target id if this is a context menu command. */
  targetId?: string;
}
